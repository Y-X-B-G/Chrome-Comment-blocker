const targetNode = document.getElementsByTagName("BODY").item(0)


//for testing only to clear console
// window.addEventListener("load", (event) => {
//     console.clear()
// })

//console.log('print does this page run')

const observer = new MutationObserver((MutationRecord, mutationObserver) => {
    regex = /comment/;
    index = 0
    for (i in MutationRecord) {
        //console.log(MutationRecord[i].addedNodes)

        if (MutationRecord[i].addedNodes.length>0) {
            current_Node_list = MutationRecord[i].addedNodes
            current_Node_list.forEach((currentValue, currentIndex, listObj) => {
                //console.log(currentValue.nodeType === Node.ELEMENT_NODE)
                if (currentValue.nodeType === Node.ELEMENT_NODE) {
                    //console.log(currentValue.getAttribute('id'))
                    class_value = currentValue.getAttribute('class')
                    id_value = currentValue.getAttribute('id')
                    console.log(id_value)
                    if (regex.test(class_value) || regex.test(id_value)) {
                        //console.log(currentValue)
                        currentValue.style.display = 'none'
                    }
                }

            })
        }

    }

})
observer.observe(targetNode, {subtree: true, childList: true, attributes: true, attributeFilter:['class', 'id']}) 
