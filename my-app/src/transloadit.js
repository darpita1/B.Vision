import TransloaditClient from '/node_modules/transloadit';

export function concat(path1, path2, path3, path4, path5, path6, audio_path) {

    const client = new TransloaditClient({
        authKey: '6f97d95d85774c6babe468427f0ae918',
        authSecret: '9037e227ccc01e4539e5b7195ea3ea3fbcdc3132'
    })

    const template = {
        "steps": {
            "imported_audio": {
                "robot": "/dropbox/import",
                "result": "true",
                "credentials": "B.Vision",
                "path": audio_path
            },
            "imported_1": {
                "robot": "/dropbox/import",
                "result": "true",
                "credentials": "B.Vision",
                "path": path1
            },
            "imported_2": {
                "robot": "/dropbox/import",
                "result": "true",
                "credentials": "B.Vision",
                "path": path2
            },
            "imported_3": {
                "robot": "/dropbox/import",
                "result": "true",
                "credentials": "B.Vision",
                "path": path3
            },
            "imported_4": {
                "robot": "/dropbox/import",
                "result": "true",
                "credentials": "B.Vision",
                "path": path4
            },
            "imported_5": {
                "robot": "/dropbox/import",
                "result": "true",
                "credentials": "B.Vision",
                "path": path5
            },
            "imported_6": {
                "robot": "/dropbox/import",
                "result": "true",
                "credentials": "B.Vision",
                "path": path6
            },
            "imported_1_resized": {
                "use": "imported_1",
                "robot": "/video/encode",
                "result": true,
                "background": "#000000",
                "ffmpeg_stack": "v3.3.3",
                "height": 270,
                "preset": "ipad-high",
                "resize_strategy": "pad",
                "width": 480
            },
            "imported_2_resized": {
                "use": "imported_2",
                "robot": "/video/encode",
                "result": true,
                "background": "#000000",
                "ffmpeg_stack": "v3.3.3",
                "height": 270,
                "preset": "ipad-high",
                "resize_strategy": "pad",
                "width": 480
            },
            "imported_3_resized": {
                "use": "imported_3",
                "robot": "/video/encode",
                "result": true,
                "background": "#000000",
                "ffmpeg_stack": "v3.3.3",
                "height": 270,
                "preset": "ipad-high",
                "resize_strategy": "pad",
                "width": 480
            },
            "imported_4_resized": {
                "use": "imported_4",
                "robot": "/video/encode",
                "result": true,
                "background": "#000000",
                "ffmpeg_stack": "v3.3.3",
                "height": 270,
                "preset": "ipad-high",
                "resize_strategy": "pad",
                "width": 480
            },
            "imported_5_resized": {
                "use": "imported_5",
                "robot": "/video/encode",
                "result": true,
                "background": "#000000",
                "ffmpeg_stack": "v3.3.3",
                "height": 270,
                "preset": "ipad-high",
                "resize_strategy": "pad",
                "width": 480
            },
            "imported_6_resized": {
                "use": "imported_6",
                "robot": "/video/encode",
                "result": true,
                "background": "#000000",
                "ffmpeg_stack": "v3.3.3",
                "height": 270,
                "preset": "ipad-high",
                "resize_strategy": "pad",
                "width": 480
            },
            "concatenated": {
                "use": {
                    "steps": [
                        {
                            "name": "imported_1_resized",
                            "as": "video_1"
                        },
                        {
                            "name": "imported_2_resized",
                            "as": "video_2"
                        },
                        {
                            "name": "imported_3_resized",
                            "as": "video_3"
                        },
                        {
                            "name": "imported_4_resized",
                            "as": "video_4"
                        },
                        {
                            "name": "imported_5_resized",
                            "as": "video_5"
                        },
                        {
                            "name": "imported_6_resized",
                            "as": "video_6"
                        },
                    ]
                },
                "robot": "/video/concat",
                "result": true,
                "ffmpeg_stack": "v3.3.3",
                "preset": "ipad-high"
            },
            "add_audio": {
                "robot": "/video/merge",
                "use": [
                    {
                        "name": "imported_audio",
                        "as": "audio"
                    },
                    {
                        "name": "concatenated",
                        "as": "video"
                    }
                ],
                "result": true,
                "ffmpeg_stack": "v3.3.3",
                "preset": "ipad-high"
            },
            "exported": {
                "use": [
                    "imported_1",
                    "imported_1_resized",
                    "imported_2_resized",
                    "concatenated",
                    "imported_2",
                    "imported_3",
                    "imported_3_resized",
                    "imported_4",
                    "imported_4_resized",
                    "imported_5",
                    "imported_5_resized",
                    "imported_6",
                    "imported_6_resized",
                    "imported_audio",
                    "add_audio"
                ],
                "robot": "/dropbox/store",
                "credentials": "B.Vision"
            }
        }
    }

    const templateString = JSON.stringify(template)
    const params = {
        name: 'node_sdk_test1',
        template: templateString,
    }

    const newParams = {
        name: 'node_sdk_test2',
        template: templateString,
    }

    const listParams = {
        sort: 'created',
        order: 'asc',
    }

    client.editTemplate(result.template_id, newParams, (err, editResult) => {
        if (err) {
          return console.log('failed editing template:', err)
        }
        console.log('Successfully edited template', editResult)
    })
}

console.log(concat())