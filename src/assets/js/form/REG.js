const REG = {
  "PHONE" 					: /^(\d{0,3})(\d{0,4})(\d{0,4})$/g
  ,"TEL"						: /^(\d{0,2})(\d{0,4})(\d{0,4})$/g
  ,"EMAIL"					: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  ,"ONLY_NUM"				: /[^0-9]/g
  ,"AUTO_HYPHEN"		: /(\-{1,2})$/g
};

export default REG;