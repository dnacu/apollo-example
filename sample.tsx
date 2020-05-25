class User {
  firstName: string;
  lastName: string;


  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

}



class Circle {
  radius: number;
  center: {
    c: number;
    r: number;
  };

  get diameter(): number {
     return memoize(this.radius, () =>~~)
    for (let i = 0; i <100000; i++) {
      console.log('dsfsd');
    }
    return this.radius * 2;
  }

  get doubleDiameter(): number {
    return this.diameter * 2;
  }
}



function render() {
  const circle = new Circle(...);

  painter(circle.x, circle.y, circle.radius);
  painter2(circle.x, circle.y, circle.diameter);
  painter2(circle.x, circle.y, circle.diameter);
  painter2(circle.x, circle.y, circle.diameter);
  painter2(circle.x, circle.y, circle.diameter);
  painter2(circle.x, circle.y, circle.diameter);
  painter2(circle.x, circle.y, circle.diameter);
  painter2(circle.x, circle.y, circle.diameter);
  painter2(circle.x, circle.y, circle.diameter);
}

// 최소한의 정보만 넣고 나머지는 파생할 수 있으니까