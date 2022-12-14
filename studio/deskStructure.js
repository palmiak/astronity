export const adminStructure = (S) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Settings')
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                ),
            ...S.documentTypeListItems().filter(listItem => !['siteSettings'].includes(listItem.getId()))
        ])