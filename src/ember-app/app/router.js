import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya18-дир-отд-по-раб-с-кл-l');
  this.route('i-i-s-kursovaya18-дир-отд-по-раб-с-кл-e',
  { path: 'i-i-s-kursovaya18-дир-отд-по-раб-с-кл-e/:id' });
  this.route('i-i-s-kursovaya18-дир-отд-по-раб-с-кл-e.new',
  { path: 'i-i-s-kursovaya18-дир-отд-по-раб-с-кл-e/new' });
  this.route('i-i-s-kursovaya18-заключ-договора-l');
  this.route('i-i-s-kursovaya18-заключ-договора-e',
  { path: 'i-i-s-kursovaya18-заключ-договора-e/:id' });
  this.route('i-i-s-kursovaya18-заключ-договора-e.new',
  { path: 'i-i-s-kursovaya18-заключ-договора-e/new' });
  this.route('i-i-s-kursovaya18-затр-время-l');
  this.route('i-i-s-kursovaya18-затр-время-e',
  { path: 'i-i-s-kursovaya18-затр-время-e/:id' });
  this.route('i-i-s-kursovaya18-затр-время-e.new',
  { path: 'i-i-s-kursovaya18-затр-время-e/new' });
  this.route('i-i-s-kursovaya18-клиент-l');
  this.route('i-i-s-kursovaya18-клиент-e',
  { path: 'i-i-s-kursovaya18-клиент-e/:id' });
  this.route('i-i-s-kursovaya18-клиент-e.new',
  { path: 'i-i-s-kursovaya18-клиент-e/new' });
  this.route('i-i-s-kursovaya18-перечень-услуг-l');
  this.route('i-i-s-kursovaya18-перечень-услуг-e',
  { path: 'i-i-s-kursovaya18-перечень-услуг-e/:id' });
  this.route('i-i-s-kursovaya18-перечень-услуг-e.new',
  { path: 'i-i-s-kursovaya18-перечень-услуг-e/new' });
  this.route('i-i-s-kursovaya18-расторж-договора-l');
  this.route('i-i-s-kursovaya18-расторж-договора-e',
  { path: 'i-i-s-kursovaya18-расторж-договора-e/:id' });
  this.route('i-i-s-kursovaya18-расторж-договора-e.new',
  { path: 'i-i-s-kursovaya18-расторж-договора-e/new' });
  this.route('i-i-s-kursovaya18-расчет-ост-врем-l');
  this.route('i-i-s-kursovaya18-расчет-ост-врем-e',
  { path: 'i-i-s-kursovaya18-расчет-ост-врем-e/:id' });
  this.route('i-i-s-kursovaya18-расчет-ост-врем-e.new',
  { path: 'i-i-s-kursovaya18-расчет-ост-врем-e/new' });
});

export default Router;
