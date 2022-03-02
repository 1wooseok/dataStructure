const REGEX = {
  ENG: /[a-zA-Z]/,
  KOR: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
};

function checkKor(key) {
  if(!REGEX.KOR.test(key)) {
    alert('한글로 입력해 주세요');
    return false;
  } 
  return true;
}

function checkEng(value) {
  if(!REGEX.ENG.test(value)) {
    alert('영어로 입력해 주세요');
    return false;
  } 
  return true;
}

export { 
  checkKor,
  checkEng    
};