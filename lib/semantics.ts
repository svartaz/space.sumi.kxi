class TAny {
  name: string;
}

class TNumber extends TAny {}
class TEvent extends TAny {}
class TThing extends TAny {}

const tarau = { name: 'tarau' } as TThing;
const mike = { name: 'mike' } as TThing;

const isCat: TThing[] = [mike];
const loveth: [TThing, TThing][] = [];
