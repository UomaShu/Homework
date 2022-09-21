/*Створити функцію що буде приймати два параметри, та повертати результат об'єднання цих параметрів.
перший параметр -  масив об'єктів
другий параметр - нові назви полів
Розбери масив об'єктів витягни з нього данні та поверни оновлений масив об'єктів , в якому назви полів з другого параметра.

Другий параметр з назвами для об'єкт [newAddress, workPlace, contactData]
Масив з такими об'єктами має повертатися
{
  newAddress: <Місто>, <Вулиця>/<Квартира>, <зіпкод>,
  workPlace: <Назва компанії>,
  contactData: <Ім'я>, <Номер телефона>, <Пошта>, <Вебсайт>
*/



let personInfo = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    }
  ] 
let newInfo = ['newAddress', 'workPlace', 'contactData'];

function createNewArray (secondPersonInfo, keysArray) {
  let newPersonInfo = secondPersonInfo.reduce(function (accum, currentValue) {
      const newObj = {}        
      keysArray.forEach(key => {  
          if (key === "contactData"){
              newObj[key] = `${currentValue.name}, ${currentValue.phone}, ${currentValue.email}, ${currentValue.website}`
          }
          else if (key === "newAddress"){
              newObj[key] = `${currentValue.address.city}, ${currentValue.address.street}/${currentValue.address.suite}, ${currentValue.address.zipcode}`
          }
          else if (key === "workPlace"){
              newObj[key] = currentValue.company.name
          }  
      });
      accum.push(newObj);

      return accum;
  },[]);
  return newPersonInfo
} 
createNewArray(personInfo, newInfo)

/*
  newAddress: <Місто>, <Вулиця>/<Квартира>, <зіпкод>,
  workPlace: <Назва компанії>,
  contactData: <Ім'я>, <Номер телефона>, <Пошта>, <Вебсайт></Вебсайт>*/