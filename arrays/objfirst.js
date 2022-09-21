const maleNames = {
    A: ["Алексей","Александр","Артем"],
    D: ["Даня","Даня"],
    E: ["Елисей"],
    C: ["Сергей"],
    B: ["Валентин"]
  };
  
  const femaleNames = {
    A: ["Анастасия","Алена","Александра"],
    D: ["Диана"],
    E: ["Елена"],
    C: ["София"],
    B: ["Валентина"]
  };

  const maleSurNames = {
    A: ["Алексеев","Александров","Артемов"],
    D: ["Данилов"],
    E: ["Елисеев"],
    C: ["Сергеев"],
    B: ["Валентинов"]
  };
  
  const femaleSurNames = {
    A: ["Андреева","Александрова","Артемова"],
    D: ["Дорофеева"],
    E: ["Еленовна"],
    C: ["Софиевна"],
    B: ["Валентиновна"]
  };

  let sex = prompt("Введите male для мужского имени или female для женского");
  let FL = prompt("Введите первую букву имени:");
  let FSL = prompt("Введите первую букву фамилии:");


  function filteredFullNames (fullNameObj, firstLetter) {
    let names = [];
    console.log(fullNameObj, firstLetter);
    Object.keys(fullNameObj).forEach(function(fullNameLetter) {
      if (fullNameLetter === firstLetter) {
      names = fullNameObj[fullNameLetter];
      }
    });
    return names;
  };

  function randomFullName (filtredFN){ 
      return filtredFN[Math.floor(Math.random() * filtredFN.length)];
  };


  function onInputChange (firstLetter, firstSurNameLetter ,sex) {

    
   
    switch (sex) {
      case "male":
        return `${randomFullName(filteredFullNames(maleNames, firstLetter))} ${randomFullName(filteredFullNames(maleSurNames,firstSurNameLetter))}`;
      case "female":
        return `${randomFullName(filteredFullNames(femaleNames, firstLetter))} ${randomFullName(filteredFullNames(femaleSurNames,firstSurNameLetter))}`;
    }
    /*
    randomFullName(filteredFullNames(maleNames, firstLetter));
    randomFullName(filteredFullNames(femaleNames,firstLetter));
    randomFullName(filteredFullNames(maleSurNames,firstSurNameLetter));
    randomFullName(filteredFullNames(femaleSurNames,firstSurNameLetter));
    */
  };
  
  alert(onInputChange(FL, FSL, sex));