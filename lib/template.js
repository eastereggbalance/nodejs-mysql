module.exports = 
{
  HTML:function(title, list, body, control)
  {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },
  list:function(topics)
  {
    let list = '<ul>';

    for(let i = 0; i < topics.length; i++)
    {
      list += `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
    }

    list += '</ul>';
    return list;
  }
}
