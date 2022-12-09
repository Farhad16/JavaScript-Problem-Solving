function abbrevName(name){
  const trimmedName = name.trim();
  return trimmedName.split(' ').map(str => str.charAt(0).toUpperCase()).join('.');
}

const name1 = "   Sam Harris"
abbrevName(name1)