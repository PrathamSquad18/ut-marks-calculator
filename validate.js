
function validate() {
  document.getElementById("error").innerHTML = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("pass-fail").innerHTML = "";
  document.getElementById("note").innerHTML = "";

  let ut1 = document.getElementById("ut1").value;
  let ut2 = document.getElementById("ut2").value;

  if (ut1 === "" && ut2 === "") {
    document.getElementById("error").innerHTML = "<br>Please enter marks for both UT1 and UT2";
    document.frm1.ut1.focus();
    return false;
  } else if (ut1 === "") {
    document.getElementById("error").innerHTML = "<br>Please enter marks for UT1";
    document.frm1.ut1.focus();
    return false;
  } else if (ut2 === "") {
    document.getElementById("error").innerHTML = "<br>Please enter marks for UT2";
    document.frm1.ut2.focus();
    return false;
  } else {
    let actualAverage = (parseFloat(ut1) + parseFloat(ut2)) / 2;
    let average = Math.round(actualAverage);
    document.getElementById("result").innerHTML = `Your average marks are: ${average}`;
    if (average >= 8) {
      document.getElementById("pass-fail").innerHTML = `<span class="pass">Result: PASS</span>`;
    } else {
      document.getElementById("pass-fail").innerHTML = `<span class="fail">Result: FAIL</span>`;
    }
    if (actualAverage % 1 !== 0) {
      document.getElementById("note").innerHTML = `<br>Note: Actual marks before rounding were ${actualAverage.toFixed(1)}`;
    }
    return false;
  }
}
