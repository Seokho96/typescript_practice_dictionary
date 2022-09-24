class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

interface Words {
  [key: string]: string;
}

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  add = (word: Word) => {
    if (this.words[word.term]) {
      const q = confirm(
        `해당 단어가 이미 존재합니다.
          ${word.term + " : " + this.words[word.term]}
          해당 단어의 뜻을 바꾸시겠습니까?`
      );

      if (!q) {
        return;
      }
    }

    this.words[word.term] = word.def;
  };

  get = (term: string) => {
    if (!this.words[term]) {
      alert("해당 단어는 존재하지 않습니다.");
      return;
    }

    console.log(this.words[term]);
  };

  delete = (term: string) => {
    if (!this.words[term]) {
      alert("해당 단어가 존재하지 않습니다.");
      return;
    }

    delete this.words[term];
  };

  update = (word: Word) => {
    if (this.words[word.term]) {
      const q = confirm(
        `해당 단어가 존재하지 않습니다.
          해당 단어를 추가하시겠습니까?`
      );

      if (!q) {
        return;
      }
    }

    this.words[word.term] = word.def;
  };

  showAll = () => {
    console.log(this.words);
  };

  count = () => {
    console.log(
      `현재 사전에 등록된 단어의 개수는
          ${Object.keys(this.words).length} 개입니다.`
    );
  };
}
