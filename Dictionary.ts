type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    } else {
      const q = confirm(`해당 단어가 이미 존재합니다.
            ${word.term + " : " + this.words[word.term]}
            해당 단어의 뜻을 바꾸시겠습니까?`);
      if (q) {
        this.words[word.term] = word.def;
      }
    }
  }
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    } else {
      const q = confirm(
        `해당 단어가 존재하지 않습니다.\n해당 단어를 추가할까요?`
      );
      if (q) {
        this.words[word.term] = word.def;
      }
    }
  }
  delete(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term];
    } else {
      alert("등록되지 않은 단어입니다.");
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}
