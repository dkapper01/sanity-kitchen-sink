export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb70d556b524c570c592039',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rk66bpvr',
                  apiId: 'b9a1812f-6a45-4206-8562-eb2ba8adda29'
                },
                {
                  buildHookId: '5eb70d559b134944192923fd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2bag9iqi',
                  apiId: '499e9c60-2268-451a-9485-5a3fe07801fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dkapper01/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2bag9iqi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
