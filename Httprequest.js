const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () =>
{
    if(xhr.readyState === 4)
    {
        xhr.status ===200 ? console.log(xhr.responseType):console.error(error)
    }
}
xhr.open('GET','http://localhost:2000');
xhr.close();