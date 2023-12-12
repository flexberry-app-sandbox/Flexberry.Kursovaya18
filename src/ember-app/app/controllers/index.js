import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya18.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya18.title'),
          children: [{
            link: 'i-i-s-kursovaya18-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.kursovaya18.i-i-s-kursovaya18-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya18.i-i-s-kursovaya18-дир-отд-по-раб-с-кл-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-kursovaya18-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya18.i-i-s-kursovaya18-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya18.i-i-s-kursovaya18-клиент-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-kursovaya18-расторж-договора-l',
            caption: i18n.t('forms.application.sitemap.kursovaya18.i-i-s-kursovaya18-расторж-договора-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya18.i-i-s-kursovaya18-расторж-договора-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-kursovaya18-затр-время-l',
            caption: i18n.t('forms.application.sitemap.kursovaya18.i-i-s-kursovaya18-затр-время-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya18.i-i-s-kursovaya18-затр-время-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-kursovaya18-заключ-договора-l',
            caption: i18n.t('forms.application.sitemap.kursovaya18.i-i-s-kursovaya18-заключ-договора-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya18.i-i-s-kursovaya18-заключ-договора-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-kursovaya18-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.kursovaya18.i-i-s-kursovaya18-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya18.i-i-s-kursovaya18-расчет-ост-врем-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kursovaya18-перечень-услуг-l',
            caption: i18n.t('forms.application.sitemap.kursovaya18.i-i-s-kursovaya18-перечень-услуг-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya18.i-i-s-kursovaya18-перечень-услуг-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})