 function customRender(reactElement,Conatainer){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML= reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target','reactElement.props.target')

    Conatainer.appendChild(domElement)
 }
 
 
 const reactElement = {
    type:'a',
    props :{
        href:'https://google.com',
        target: '_blank'
    },
    children : 'click me'
 }

 
 
 const  mainConatainer = document.querySelector('#root');

 customRender(reactElement,mainConatainer)
