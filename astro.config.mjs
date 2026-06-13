import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://archive.67656.fun',
  integrations: [
    starlight({
      title: {
        'zh-CN': '舞雩台',
        en: 'Rain Altar Archive',
      },
      description: '一间保存小说、札记、地图与未完成世界的个人档案馆。',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      defaultLocale: 'root',
      customCss: ['./src/styles/starlight.css'],
      components: {
        ThemeProvider: './src/components/starlight/ThemeProvider.astro',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      lastUpdated: false,
      pagination: true,
      sidebar: [
        {
          label: '档案入口',
          translations: { en: 'Archive Entrance' },
          items: [
            { label: '回到首页', translations: { en: 'Home' }, link: '/' },
            { label: '馆藏说明', translations: { en: 'About the Archive' }, slug: 'archive' },
          ],
        },
        {
          label: '作品',
          translations: { en: 'Works' },
          items: [
            {
              label: '乌鸦的游记',
              translations: { en: 'Crow’s Travelogue' },
              items: [
                { label: '简介', translations: { en: 'Introduction' }, slug: 'works/legend-of-vashain' },
                {
                  label: '世界观与设定',
                  translations: { en: 'World & Setting' },
                  items: [
                    { label: '民族', translations: { en: 'Peoples' }, slug: 'works/legend-of-vashain/settings/nation' },
                    { label: '地理', translations: { en: 'Geography' }, slug: 'works/legend-of-vashain/settings/geography' },
                    { label: '国家', translations: { en: 'Countries' }, slug: 'works/legend-of-vashain/settings/countries' },
                    { label: '人物', translations: { en: 'Characters' }, slug: 'works/legend-of-vashain/settings/characters' },
                    { label: '宗教', translations: { en: 'Religion' }, slug: 'works/legend-of-vashain/settings/religion' },
                    { label: '其他', translations: { en: 'Miscellany' }, slug: 'works/legend-of-vashain/settings/miscellany' },
                    { label: '词汇表', translations: { en: 'Terminology' }, slug: 'works/legend-of-vashain/settings/words' },
                  ],
                },
                {
                  label: '第一卷 日落岛',
                  translations: { en: 'Volume I: Sunset Isle' },
                  items: [
                    { label: '第一章 铁匠之子', translations: { en: 'Chapter 1: The Blacksmith’s Son' }, slug: 'works/legend-of-vashain/volume-one-sunset-isle/chapter-1-blacksmiths-son' },
                    { label: '第二章 手套帮', translations: { en: 'Chapter 2: Glove Gang' }, slug: 'works/legend-of-vashain/volume-one-sunset-isle/chapter-2-glove-gang' },
                    { label: '第三章 卡姆登镇的以撒人', translations: { en: 'Chapter 3: The Isaacites of Camden' }, slug: 'works/legend-of-vashain/volume-one-sunset-isle/chapter-3-isaacites-of-camden' },
                    { label: '第四章 王河城', translations: { en: 'Chapter 4: King’s River City' }, slug: 'works/legend-of-vashain/volume-one-sunset-isle/chapter-4-riverking-city' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: '札记',
          translations: { en: 'Notes' },
          items: [
            { label: '把个人主页做成一间安静的档案馆', translations: { en: 'Turning a Personal Site into a Quiet Archive' }, slug: 'notes/making-an-archive' },
            { label: '沂水春风', translations: { en: 'Yishui Spring Breeze' }, slug: 'notes/yishui-spring-breeze' },
            { label: '三国的第二次落幕', translations: { en: 'The Second Fall of the Three Kingdoms' }, slug: 'notes/three-kingdoms-fall' },
            { label: '世界是草台班子', translations: { en: 'The World Is Held Together by Tape' }, slug: 'notes/cardboard-world' },
          ],
        },
      ],
    }),
  ],
});
