function makeBold(element) {
    var element = document.getElementsByClassName(element)[0];

    var element_content = element.textContent;

    alert(element_content);

    element_content.replace(/(فلاتر|تاریخ)/ig, <b>$1</b>);

    element.innerHTML = element_content;

}


makeBold('container');