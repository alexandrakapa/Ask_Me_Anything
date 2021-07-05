export const columns = [
    {
        name: "question_id",
        label: "id",
        options: {
            filter: true,
            sort: true,
            display: false
        },
    },
    {
        name: "title",
        label: "Title of question",
        options: {
            filter: true,
            sort: true,
        },
    },
    {
        name: "text",
        label: "Text",
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: "askedOn",
        label: "Date asked",
        options: {
            filter: true,
            sort: false,
        },
    },
    {
        name: "askedFrom",
        label: "Asked From",
        options: {
            filter: true,
            sort: false,
            display: false
        },
    },
];