export default {
    'id' : 'test@0.0.1',
    'nodes' : {
        '1': {
            'id': 1,
            'data': {
                'num': 2
            },
            'group': null,
            'inputs': [],
            'outputs': [
                {
                    'connections': [
                        {
                            'node': 3,
                            'input': 0
                        }
                    ]
                }
            ],
            'position': [
                80, 200
            ],
            'title': 'Number'
        },
        '2': {
            'id': 2,
            'data': {
                'num': 1
            },
            'group': null,
            'inputs': [],
            'outputs': [
                {
                    'connections': [
                        {
                            'node': 4,
                            'input': 1
                        }
                    ]
                }
            ],
            'position': [
                105.55555555555556, 516.6666666666666
            ],
            'title': 'Number'
        },
        '3': {
            'id': 3,
            'data': {},
            'group': null,
            'inputs': [
                {
                    'connections': [
                        {
                            'node': 1,
                            'output': 0
                        }
                    ]
                }, {
                    'connections': [
                        {
                            'node': 4,
                            'output': 0
                        }
                    ]
                }
            ],
            'outputs': [
                {
                    'connections': [
                        {
                            'node': 4,
                            'input': 0
                        }
                    ]
                }
            ],
            'position': [
                454.44444444444446, 108.88888888888889
            ],
            'title': 'Add'
        },
        '4': {
            'id': 4,
            'data': {},
            'group': null,
            'inputs': [
                {
                    'connections': [
                        {
                            'node': 3,
                            'output': 0
                        }
                    ]
                }, {
                    'connections': [
                        {
                            'node': 2,
                            'output': 0
                        }
                    ]
                }
            ],
            'outputs': [
                {
                    'connections': [
                        {
                            'node': 3,
                            'input': 1
                        }
                    ]
                }
            ],
            'position': [
                781.6666666666663, 260.0000000000001
            ],
            'title': 'Add'
        }
    },
    'groups' : {}
}