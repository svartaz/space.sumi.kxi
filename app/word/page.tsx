import dic, { Formation, translate } from '../../lib/lexicology';
import { invalid, toIpa } from '../../lib/phonology';
import { replaceEach } from '../../lib/common';
import { toDayString } from '../../lib/date';
import { Target } from '../page';
import { CSSProperties } from 'react';
import style from './page.module.sass';

const Ipa = ({ children }: { children: string }) => <span className="ipa">{toIpa(children)}</span>;

const term = {
  style: {
    paddingInline: '.125rem',
    backgroundColor: '#0002',
    borderRadius: '.25rem',
  } as CSSProperties,
};

export default () => (
  <>
    <h2>words</h2>

    {(() => {
      const dateToKeys = {};
      for (const k of dic.keys()) {
        const { d: date } = dic.get(k);
        if (date in dateToKeys) dateToKeys[date].push(k);
        else dateToKeys[date] = [k];
      }

      let sum = 0;
      for (const date in dateToKeys) {
        dateToKeys[date] = dateToKeys[date].filter((k, i, self) => (!k.endsWith('*') || !self.includes(k.replace(/\*$/, ''))) && (!k.endsWith('#') || !self.includes(k.replace(/\#$/, ''))));
        sum += dateToKeys[date].length;
      }

      const date0 = Object.keys(dateToKeys).reduce((acc, d) => (d < acc ? d : acc), '9999-99-99');

      let acc = 0;
      return (
        <table className={style.progress}>
          <tbody>
            {Object.keys(dateToKeys)
              .sort()
              .map((date) => {
                acc += dateToKeys[date].length;
                const percent = (acc / sum) * 100;
                return (
                  <tr>
                    <th style={{ textWrap: 'nowrap' }}>{toDayString(new Date(date))}</th>
                    <td>{(new Date(date).getTime() - new Date(date0).getTime()) / 1000 / 60 / 60 / 24}</td>
                    <td
                      style={{
                        background: `linear-gradient(to right, #0001 0%, #0001 ${percent}%, transparent ${percent}%, transparent 100%)`,
                      }}
                      className="code"
                    >
                      {dateToKeys[date].join(' ')}
                    </td>
                    <td style={{ textWrap: 'nowrap' }}>+{dateToKeys[date].length}</td>
                    <td style={{ textWrap: 'nowrap' }}>{acc}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      );
    })()}

    <table className={style.dictionary}>
      <thead className="h">
        <tr>
          <th></th>
          <th>token</th>
          <th>sound</th>
          <th>class</th>
          <th>tokened</th>
          <th>origin</th>
          <th>!</th>
        </tr>
      </thead>
      <tbody>
        {[...dic.entries()].map(([key, { t: token, td: tokened, c: klass, o: origin, formation }]) => (
          <tr id={'entry-' + key} style={invalid(token, formation) ? { backgroundColor: 'lightcoral' } : {}}>
            <td className="code">{key}</td>
            <td>
              <Target>{token}</Target>
            </td>
            <td>
              <Ipa>{token}</Ipa>
            </td>
            <td>{klass}</td>
            {tokened.startsWith('=') ? (
              <td>
                =
                <a href={'#entry-' + key.substring(1)}>
                  <Target>{translate(tokened.substring(1))}</Target>
                </a>
              </td>
            ) : (
              <td>
                {tokened.split(/(?<=@\d+|@\{.+?\})|(?=@\d+|@\{.+?\})/g).map((s: string) =>
                  /@\d+|@\{.+?\}/.test(s) ? (
                    <span {...term}>
                      {replaceEach(s, [
                        [/^@\{?/, ''],
                        [/\}$/, ''],
                      ])}
                    </span>
                  ) : (
                    s
                  )
                )}{' '}
              </td>
            )}
            <td style={{ fontSize: 'xx-small' }} className={formation === Formation.Simplex ? '' : 'code'}>
              {origin?.startsWith('https://') ? <a href={origin}>{decodeURI(origin).replace(/^https?:\/\//, '')}</a> : origin}
            </td>
            <td style={{ fontSize: 'xx-small' }}>{invalid(token, formation)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
