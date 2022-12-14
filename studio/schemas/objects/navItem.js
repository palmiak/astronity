export default {
    name: "navItem",
    type: "object",
    title: "NavItem",
    fields: [
        {
            name: "text",
            type: "string",
            title: "Text"
        },
        {
            name: "icon_name",
            type: "string",
            title: "Icon name",
            description: 'Check names on https://icon-sets.iconify.design/.'
        },
        {
            name: "navItemUrl",
            type: "link",
            title: "Nav Item URL"
        },
        
    ]
};