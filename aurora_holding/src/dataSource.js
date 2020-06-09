let dataSource = [
        {
            taskName: 'Нур-Султан',
            duration: 100,
        },
        {
            taskName: 'Алматы',
            duration: 125,
            subtasks: [
                { taskName: 'Центр 1', duration: 125, approved: false, subtasks: [
                    { taskName: 'Управление 1', duration: 125, subtasks: [
                        {taskName: 'Отдел 1', duration: 125},
                        {taskName: 'Отдел 2', duration: 125}
                    ]},
                    { taskName: 'Управление 2', duration: 125, subtasks: [
                        {taskName: 'Отдел 1', duration: 125},
                        {taskName: 'Отдел 2', duration: 125}
                    ]},
                ]},
                { taskName: 'Центр 2', duration: 125, subtasks: [
                    { taskName: 'Управление 1', duration: 125, subtasks: [
                        {taskName: 'Отдел 1', duration: 125},
                        {taskName: 'Отдел 2', duration: 125}
                    ]},
                    { taskName: 'Управление 2', duration: 125, subtasks: [
                        {taskName: 'Отдел 1', duration: 125},
                        {taskName: 'Отдел 2', duration: 125}
                    ]},
                ]},
            ]
        },
        {
            taskName: 'Актау',
            duration: 50
        }
    ];

export default dataSource;