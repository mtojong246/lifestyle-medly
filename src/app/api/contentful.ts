import * as contentful from 'contentful';

export const client = contentful.createClient({
    space: 't2k5i123mzum',
    accessToken: 'VuM44Ibe-d93y9AsssvSpJMoon0ABv_5-43vIqBUN78',
})

client.getEntry('3Xw3m8V0DY2utbK1RDCEew').then((entry) => console.log(entry)).catch((err) => console.log(err))