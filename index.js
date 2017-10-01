var katzDeli = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}
function nowServing(line){
  if (line.length < 1){
    return 'There is nobody waiting to be served!';
  } else if (line.length >= 1){
    var message = `Currently serving ${line[0]}.`;
    line.shift();
    return message;
  }
}
