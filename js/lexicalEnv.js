// scope

const globalVar = "global";

if (true) {
  const localVarIn1if = "local in 1 if";

  if (true) {
    const localVarIn2if = "local in 2 if";
    console.log("globalVar :>> ", globalVar);
    console.log("localVarIn1if :>> ", localVarIn1if);
    console.log("localVarIn2if :>> ", localVarIn2if);
  }
}

// Lexical Environment / Лексичне оточення

const a = "global";

f1();

function f1() {
  const a = "local";

  // f2();
  return function f2() {
    console.log("a :>> ", a);
  };
}

const f2Returned = f1();
