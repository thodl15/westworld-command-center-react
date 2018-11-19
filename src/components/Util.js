export const prettyPrintAreaName = (label) => {
    let output = [];
        let nameArray = label.split("_");
        nameArray.forEach(str => {
            let first = str.charAt(0);
            output.push(str.replace(first, first.toUpperCase()));
        });
        return output.join(" ");
}