import * as contentful from 'contentful';
var ctfKey = process.env.PA_CTF_KEY;
var ctfSpace = process.env.PA_CTF_SPACE;

var client = contentful.createClient({
    space: ctfSpace,
    accessToken: ctfKey
});

export const fetchData = type => {
    return client.getEntries({content_type: type})
      .then(entries => {
        let result = []
        entries.items.forEach(entry => {
          if(entry.fields) {
            Object.keys(entry.fields).map(itemKey => {
                let item = entry.fields[itemKey];
                if(item.sys && item.sys.type == 'Asset'){
                    entry.fields[itemKey] = `https:${item.fields.file.url}`;
                }
            })
            result.push({
              ...entry.fields,
              createdAt: entry.sys.createdAt
            })
          }
        })
        return result
      })
}