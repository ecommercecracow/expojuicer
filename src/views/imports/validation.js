
/*

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

*/


const containsOneEmailPerLine = (line) => (line.indexOf("@") > 0 && (line.match(/@/g) || []).length === 1);


export const validate = values => {
  console.log(values);

  const errors = {};

  if (!values.imported_manually && !values.imported_json) {
    errors.imported_manually = ['No input detected...'];
    errors.imported_json = ['No file detected...'];
  }

  if (values.imported_manually) {

    if(!values.imported_manually.every((el,idx,arr) => containsOneEmailPerLine(el)))
    {
        errors.imported_manually = ['Bad input? One email per line?'];
    }
  }

  if (values.imported_json) {
    const mappings = values.imported_json.mappings;

    let emailMapped = false;
    const mappingsUsed = [];

    for (var key in mappings) {
      if (mappings.hasOwnProperty(key)) {
        if (mappings[key] === 'email') {
          emailMapped = true;
        }

        if (mappingsUsed.indexOf(mappings[key]) > -1) {
          errors.imported_json = ['Mapping overlapping!'];
        }

        if (mappings[key] !== 'skip') {
          mappingsUsed.push(mappings[key]);
        }
      }
    }

    if (!emailMapped) {
      errors.imported_json = ['Bad mapping!'];
    }
  }

  return errors;
};
