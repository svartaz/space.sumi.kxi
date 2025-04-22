import { CSSProperties } from 'react';
import dic, { translate } from '../lib/lexicology';
import { toIpa } from '../lib/phonology';
import { replaceEach } from '../lib/common';
import orthography from '../lib/orthography';
import { Letter } from '../lib/letter';
import { name } from '../lib/dictRaw';

export const Target = ({ children }: { children: string }) =>
  true ? (
    <span className="target" title={children}>
      {orthography(children)}
    </span>
  ) : (
    <TargetLetter>{children}</TargetLetter>
  );

const TargetLetter = (props: { children: string; title?: string; style?: CSSProperties }) => (
  <Letter title={props.children} className="target" {...props}>
    {replaceEach(props.children.toLowerCase(), [
      [/[ktcdgnlriueoa]/g, (it) => it.toLowerCase()],
      [/h/g, 'x'],
      [/x/g, 'S'],
      [/j/g, 'Z'],
    ])}
  </Letter>
);

export default () => (
  <>
    <h1>
      <ruby style={{ rubyPosition: 'under' }}>
        <Target>{name}</Target>
        <rt className="ipa">{toIpa(name)}</rt>
      </ruby>
    </h1>

    <div
      style={{
        inlineSize: 'fit-content',
        marginInline: 'auto',
      }}
    >
      <Target>{translate('language done make der called sumi')}</Target>
    </div>

    <h2>phonology</h2>
    <table className="c">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>velar</th>
          <th>mouthroofy</th>
          <th>toothly</th>
          <th>lippy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colSpan={2}>nosely</th>
          <td className="target">
            g<sub className="ipa">{toIpa('g')}</sub>
          </td>
          <td></td>
          <td className="target">n</td>
          <td className="target">m</td>
        </tr>
        <tr>
          <th rowSpan={2}>plosive</th>
          <th>rearded</th>
          <td className="target">
            c<sub className="ipa">{toIpa('c').substring(0, 1)}</sub>
          </td>
          <td></td>
          <td className="target">d</td>
          <td className="target">b</td>
        </tr>
        <tr>
          <th rowSpan={2}>unrearded</th>
          <td className="target">k</td>
          <td></td>
          <td className="target">t</td>
          <td className="target">p</td>
        </tr>
        <tr>
          <th rowSpan={2}>fricative</th>
          <td className="target">h</td>
          <td className="target">
            x<sub className="ipa">{toIpa('x').substring(0, 1)}</sub>
          </td>
          <td className="target">s</td>
          <td className="target">f </td>
        </tr>
        <tr>
          <th>rearded</th>
          <td></td>
          <td className="target">
            j<sub className="ipa">{toIpa('ja').substring(0, 1)}</sub>
          </td>
          <td className="target">z</td>
          <td className="target">v</td>
        </tr>
        <tr>
          <th colSpan={2}>approcsimant</th>
          <td></td>
          <td className="target">j</td>
          <td className="target">
            r<sub className="ipa">{toIpa('r')}</sub> l
          </td>
          <td className="target">
            v<sub className="ipa">{toIpa('kva').substring(1, 2)}</sub>
          </td>
        </tr>
        <tr>
          <th rowSpan={2}>clepend</th>
          <th>non-mid</th>
          <td className="target">a</td>
          <td className="target">i</td>
          <td></td>
          <td className="target">u</td>
        </tr>
        <tr>
          <th>mid</th>
          <td></td>
          <td className="target">e</td>
          <td></td>
          <td className="target">o</td>
        </tr>
      </tbody>
    </table>

    <ul>
      <li>
        {'{'}
        <Target>j,v</Target>
        {'}'} is
      </li>
      <ul>
        <li>a fricative if word-initial or inter-vocalic.</li>
        <li>an approcsimant otherwise.</li>
      </ul>
      <li>a word can't</li>
      <ul>
        <li>begin with a clepend.</li>
        <ul>
          <li>
            <Target>z</Target> is put before a loan word that begineth with a clepend.
          </li>
        </ul>
        <li>
          end without a clepend or {'{'}
          <Target>n,m,k,t,x,s,f,j,v,r</Target>
          {'}'}.
        </li>
      </ul>
    </ul>

    <h2>sentences</h2>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
      }}
    >
      {[
        [
          ['my name is sumi', 'i called $sumi'],
          ['i am speaking a language which i am making', 'i speak den done make der i'],

          ['all human beings are born free and equal in dignity and rights.', 'each human done beget then free and same by how_much noble _end and right'],

          ['(someone) giveth (something) (to someone)', 'give'],
          ['(someone) giveth water (to someone)', 'give den water'],
          ['(someone) giveth water to a cat', 'give den water to cat'],
          ['a person giveth water to a cat', 'person give den water to cat'],
          ['a tall person giveth fresh water to a black cat', 'person long give den water fresh to cat black'],
          ['a person giving fresh water to a black cat is tall', 'person give den water fresh to cat black then long'],
          ['water given is fresh', 'water done give fresh'],
          ['water given by a person is fresh', 'water done give der person then fresh'],
          ['? water is given by a fresh person', 'water done give der person fresh'],
          ['water given to a cat by a person is fresh', 'water done give der person to cat then fresh'],
          ['a cat given water is black', 'cat done to give den water then black'],
          ['a cat given water by a person is black', 'cat done to give der person den water then fresh'],

          ['i am a cat', 'i cat'],
          ['i am not a cat', 'i not cat'],

          ['no person is loved by every person', 'zero person done love der each person'],
          ['for no person 𝑜, for any person 𝑠, 𝑠 loves 𝑜', 'zero person _0 each person _1 _1 love der _0'],

          ['(ニューエクスプレスプラス 中国語 1)\n請問, 您 是 鈴木 小姐 嗎?', 'hi thou whether called suzuki'],
          ['是, 我 是 鈴木惠子.', 'one . i called suzukikeiko'],
          ['您 是 李 先生 嗎?', 'thou whether called li'],
          ['是, 我 是 李明.', 'one . i called limig'],
          ['李明 先生, 你好!', 'thou called limig . i greet'],
          ['你好, 鈴木 小姐.', 'i greet den thou called suzuki'],

          ['(ニューエクスプレスプラス 中国語 2)\n你 爸爸 好 嗎?', 'male beget den thou , whether healthy'],
          ['謝謝, 他 很 好.', 'i thank . he healthy'],
          ['你 爸爸 忙 不 忙?', 'male beget den thou , whether busy'],
          ['他 很 忙.', 'he busy'],
          ['你 媽媽 呢?', 'female beget thou , whether do'],
          ['他 不太 忙.', 'he not busy ly much'],
        ].map(([en, code]) => (
          <table className="sample">
            <tbody>
              <tr>
                <td className="target">
                  {code.split(/(?<=\s+)|(?=\s+)/g).map((chunk, i, self) => {
                    if (chunk.startsWith('$')) return chunk.slice(1);
                    else if (dic.has(chunk)) {
                      const token = dic.get(chunk)?.t;
                      const orth = orthography(token);
                      const ipa = toIpa(token);

                      return orth === ipa ? (
                        <ruby>
                          {orth}
                          <rt className="code">{chunk}</rt>
                        </ruby>
                      ) : (
                        <ruby>
                          <ruby>
                            {orth}
                            <rt className="ipa">{ipa}</rt>
                          </ruby>
                          <rt className="code">{chunk}</rt>
                        </ruby>
                      );
                    } else return chunk;
                  })}
                </td>
                <td>{en}</td>
              </tr>
            </tbody>
          </table>
        )),
      ]}
    </div>

    <h2>bookstaff</h2>
    <div
      style={{
        inlineSize: 'fit-content',
        marginInline: 'auto',
      }}
    >
      <Letter>{['K k T t P p', 'C c D d B b', 'X x S s F f', 'H h Z z V v', 'G g N n M m', '      j r    w', '      i I u U', '      e E o O', 'A a'].join('\n')}</Letter>
    </div>
  </>
);
