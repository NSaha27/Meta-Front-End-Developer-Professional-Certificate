const train = {
  isSuperfast: false,
  normalSpeed: 60,
  highestSpeed: 80
};

const darjeelingMail = Object.create(train);
console.log(darjeelingMail);
console.log(darjeelingMail.isSuperfast ? darjeelingMail.highestSpeed : darjeelingMail.normalSpeed);

console.log();

const janasatabdiExpress = Object.create(train);
janasatabdiExpress.isSuperfast = true;
janasatabdiExpress.highestSpeed = 130;
console.log(janasatabdiExpress);
console.log(janasatabdiExpress.isSuperfast ? janasatabdiExpress.highestSpeed : janasatabdiExpress.normalSpeed);


