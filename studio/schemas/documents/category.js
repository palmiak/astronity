export default {
    name: "category",
    type: "document",
    title: "Category",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            description:
                "Some frontends will require a slug to be set to be able to show the category",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
    ],
};