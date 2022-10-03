import edgeResponse from '@lib/edgeResponse';

export const config = {
    runtime: 'experimental-edge',
}

export default function system() {
    return edgeResponse([
        {
            "uniqueFilename": "DefaultEngine.ini",
            "filename": "DefaultEngine.ini",
            "hash": "d5b0412c1e7b8ee9d5e5f4768cf024f3ed7f7bf5",
            "hash256": "8cf7e3076ec7b01cefc32fe88a50bf46a5eb7ecbe48c014315968289386c82aa",
            "length": 690,
            "contentType": "text/plain; charset=UTF-8",
            "uploaded": "2022-09-07T13:53:03.822Z",
            "storageType": "S3",
            "doNotCache": false,
        },
        {
            "uniqueFilename": "DefaultGame.ini",
            "filename": "DefaultGame.ini",
            "hash": "6580fe69a6fb2152d5e00f8ddb3f185c58f8dd94",
            "hash256": "a210290b8d7d20c742644ea4a41baf7435e7522cf9a5829b73192fbca30b1fa9",
            "length": 285,
            "contentType": "text/plain; charset=UTF-8",
            "uploaded": "2022-09-07T13:53:03.822Z",
            "storageType": "S3",
            "doNotCache": false,
        },
        {
            "uniqueFilename": "DefaultRuntimeOptions.ini",
            "filename": "DefaultRuntimeOptions.ini",
            "hash": "61719cf6ef760f8ad4bd1658b37f6a6b4591cb78",
            "hash256": "d7bc8e9a4a26950d9bc0c031a88fecd34676b96a772970fec6fc82f72cef19d2",
            "length": 100,
            "contentType": "text/plain; charset=UTF-8",
            "uploaded": "2022-09-07T13:53:03.822Z",
            "storageType": "S3",
            "doNotCache": false,
        }
    ]);
}