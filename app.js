function countDown(n) {
    console.log (n);
    if (n >= 1) {  // Exit or terminal condition
      countDown(n-1);
    }
  }

  countDown(10);
  