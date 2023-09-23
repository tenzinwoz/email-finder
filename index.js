const textForm = document.getElementById("result-div");

document.getElementById("main-form").addEventListener("submit", function (e) {
  e.preventDefault();
  getData(e.target);
});

document
  .getElementById("cpy-clipboard")
  .addEventListener("click", function (e) {
    navigator.clipboard.writeText(textForm.value);
    alert("Copied to clipboard");
  });

function getData(form) {
  const formData = new FormData(form);
  const { fname, lname, domain } = Object.fromEntries(formData);
  if (!fname || !lname || !domain) {
    return;
  }
  const result = generateEmails(fname, lname, domain);
  textForm.innerText = result;
}

function generateEmails(fName, lName, domain) {
  const fn = `${fName}@${domain}`;
  const ln = `${lName}@${domain}`;
  const fnln = `${fName}${lName}@${domain}`;
  const fndotln = `${fName}.${lName}@${domain}`;
  const filn = `${fName.charAt(0)}${lName}@${domain}`;
  const fidotln = `${fName.charAt(0)}.${lName}@${domain}`;
  const fnli = `${fName}${lName.charAt(0)}@${domain}`;
  const fndotli = `${fName}.${lName.charAt(0)}@${domain}`;
  const fili = `${fName.charAt(0)}${lName.charAt(0)}@${domain}`;
  const fidotli = `${fName.charAt(0)}.${lName.charAt(0)}@${domain}`;

  const lnfn = `${lName}.${fName}@${domain}`;
  const lndotfn = `${lName}.${fName}@${domain}`;
  const lnfi = `${lName}${fName.charAt(0)}@${domain}`;
  const lndotfi = `${lName}.${fName.charAt(0)}@${domain}`;
  const lifn = `${lName.charAt(0)}${fName}@${domain}`;
  const lidotfn = `${lName.charAt(0)}.${fName}@${domain}`;
  const lifi = `${lName.charAt(0)}${fName.charAt(0)}@${domain}`;
  const lidotfi = `${lName.charAt(0)}.${fName.charAt(0)}@${domain}`;

  const fndashln = `${fName}-${lName}@${domain}`;
  const fidashln = `${fName.charAt(0)}-${lName}@${domain}`;
  const fndashli = `${fName}-${lName.charAt(0)}@${domain}`;
  const fidashli = `${fName.charAt(0)}-${lName.charAt(0)}@${domain}`;
  const lndashfn = `${lName}-${fName}@${domain}`;
  const lndashfi = `${lName}-${fName.charAt(0)}@${domain}`;
  const lidashfn = `${lName.charAt(0)}-${fName}@${domain}`;
  const lidashfi = `${lName.charAt(0)}-${fName.charAt(0)}@${domain}`;

  const fn_ln = `${fName}_${lName}@${domain}`;
  const fi_ln = `${fName.charAt(0)}_${lName}@${domain}`;
  const fn_li = `${fName}_${lName.charAt(0)}@${domain}`;
  const fi_li = `${fName.charAt(0)}_${lName.charAt(0)}@${domain}`;
  const ln_fn = `${lName}_${fName}@${domain}`;
  const ln_fi = `${lName}_${fName.charAt(0)}@${domain}`;
  const li_fn = `${lName.charAt(0)}_${fName}@${domain}`;
  const li_fi = `${lName.charAt(0)}_${fName.charAt(0)}@${domain}`;
  return [
    fn,
    ln,
    fnln,
    fndotln,
    filn,
    fidotln,
    fnli,
    fndotli,
    fili,
    fidotli,
    lnfn,
    lndotfn,
    lnfi,
    lndotfi,
    lifn,
    lidotfn,
    lifi,
    lidotfi,
    fndashln,
    fidashln,
    fndashli,
    fidashli,
    lndashfn,
    lndashfi,
    lidashfn,
    lidashfi,
    fn_ln,
    fi_ln,
    fn_li,
    fi_li,
    ln_fn,
    ln_fi,
    li_fn,
    li_fi,
  ];
}
