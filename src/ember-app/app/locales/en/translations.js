import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya18ДирОтдПоРабСКлLForm from './forms/i-i-s-kursovaya18-дир-отд-по-раб-с-кл-l';
import IISKursovaya18ЗаключДоговораLForm from './forms/i-i-s-kursovaya18-заключ-договора-l';
import IISKursovaya18ЗатрВремяLForm from './forms/i-i-s-kursovaya18-затр-время-l';
import IISKursovaya18КлиентLForm from './forms/i-i-s-kursovaya18-клиент-l';
import IISKursovaya18ПереченьУслугLForm from './forms/i-i-s-kursovaya18-перечень-услуг-l';
import IISKursovaya18РасторжДоговораLForm from './forms/i-i-s-kursovaya18-расторж-договора-l';
import IISKursovaya18РасчетОстВремLForm from './forms/i-i-s-kursovaya18-расчет-ост-врем-l';
import IISKursovaya18ДирОтдПоРабСКлEForm from './forms/i-i-s-kursovaya18-дир-отд-по-раб-с-кл-e';
import IISKursovaya18ЗаключДоговораEForm from './forms/i-i-s-kursovaya18-заключ-договора-e';
import IISKursovaya18ЗатрВремяEForm from './forms/i-i-s-kursovaya18-затр-время-e';
import IISKursovaya18КлиентEForm from './forms/i-i-s-kursovaya18-клиент-e';
import IISKursovaya18ПереченьУслугEForm from './forms/i-i-s-kursovaya18-перечень-услуг-e';
import IISKursovaya18РасторжДоговораEForm from './forms/i-i-s-kursovaya18-расторж-договора-e';
import IISKursovaya18РасчетОстВремEForm from './forms/i-i-s-kursovaya18-расчет-ост-врем-e';
import IISKursovaya18ДирОтдПоРабСКлModel from './models/i-i-s-kursovaya18-дир-отд-по-раб-с-кл';
import IISKursovaya18ЗаключДоговораModel from './models/i-i-s-kursovaya18-заключ-договора';
import IISKursovaya18ЗатрВремяModel from './models/i-i-s-kursovaya18-затр-время';
import IISKursovaya18КлиентModel from './models/i-i-s-kursovaya18-клиент';
import IISKursovaya18ОказКонсультModel from './models/i-i-s-kursovaya18-оказ-консульт';
import IISKursovaya18ПереченьУслугModel from './models/i-i-s-kursovaya18-перечень-услуг';
import IISKursovaya18РасторжДоговораModel from './models/i-i-s-kursovaya18-расторж-договора';
import IISKursovaya18РасчетОстВремModel from './models/i-i-s-kursovaya18-расчет-ост-врем';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya18-дир-отд-по-раб-с-кл': IISKursovaya18ДирОтдПоРабСКлModel,
    'i-i-s-kursovaya18-заключ-договора': IISKursovaya18ЗаключДоговораModel,
    'i-i-s-kursovaya18-затр-время': IISKursovaya18ЗатрВремяModel,
    'i-i-s-kursovaya18-клиент': IISKursovaya18КлиентModel,
    'i-i-s-kursovaya18-оказ-консульт': IISKursovaya18ОказКонсультModel,
    'i-i-s-kursovaya18-перечень-услуг': IISKursovaya18ПереченьУслугModel,
    'i-i-s-kursovaya18-расторж-договора': IISKursovaya18РасторжДоговораModel,
    'i-i-s-kursovaya18-расчет-ост-врем': IISKursovaya18РасчетОстВремModel
  },

  'application-name': 'Kursovaya18',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya18',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya18',
          title: 'Kursovaya18'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursovaya18: {
          caption: 'Kursovaya18',
          title: 'Kursovaya18',
          'i-i-s-kursovaya18-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-kursovaya18-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kursovaya18-расторж-договора-l': {
            caption: 'Расторж договора',
            title: ''
          },
          'i-i-s-kursovaya18-затр-время-l': {
            caption: 'Затр время',
            title: ''
          },
          'i-i-s-kursovaya18-заключ-договора-l': {
            caption: 'Заключ договора',
            title: ''
          },
          'i-i-s-kursovaya18-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-kursovaya18-перечень-услуг-l': {
            caption: 'Перечень услуг',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya18-дир-отд-по-раб-с-кл-l': IISKursovaya18ДирОтдПоРабСКлLForm,
    'i-i-s-kursovaya18-заключ-договора-l': IISKursovaya18ЗаключДоговораLForm,
    'i-i-s-kursovaya18-затр-время-l': IISKursovaya18ЗатрВремяLForm,
    'i-i-s-kursovaya18-клиент-l': IISKursovaya18КлиентLForm,
    'i-i-s-kursovaya18-перечень-услуг-l': IISKursovaya18ПереченьУслугLForm,
    'i-i-s-kursovaya18-расторж-договора-l': IISKursovaya18РасторжДоговораLForm,
    'i-i-s-kursovaya18-расчет-ост-врем-l': IISKursovaya18РасчетОстВремLForm,
    'i-i-s-kursovaya18-дир-отд-по-раб-с-кл-e': IISKursovaya18ДирОтдПоРабСКлEForm,
    'i-i-s-kursovaya18-заключ-договора-e': IISKursovaya18ЗаключДоговораEForm,
    'i-i-s-kursovaya18-затр-время-e': IISKursovaya18ЗатрВремяEForm,
    'i-i-s-kursovaya18-клиент-e': IISKursovaya18КлиентEForm,
    'i-i-s-kursovaya18-перечень-услуг-e': IISKursovaya18ПереченьУслугEForm,
    'i-i-s-kursovaya18-расторж-договора-e': IISKursovaya18РасторжДоговораEForm,
    'i-i-s-kursovaya18-расчет-ост-врем-e': IISKursovaya18РасчетОстВремEForm
  },

});

export default translations;
