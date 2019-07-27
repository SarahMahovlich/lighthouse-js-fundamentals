for (var num = 100; num <= 200; num++) {
  if ((num % 3 === 0) && (num % 4 === 0)) { //put first so runs before can satisfy other conditions
    console.log("LoopyLighthouse");
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else if (num % 3 === 0) {
    console.log("Loopy");
  } else {
    console.log(num);
  }
}

