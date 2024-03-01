let personName1: string = "mEHdi";
console.log(`Lower Case : ${personName1.toLowerCase()}`);
console.log(`Upper Case : ${personName1.toUpperCase()}`);
console.log(`Title Case : ${titleCase(personName1)}`);

function titleCase(str: string): string {
    return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}


