﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya18
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Клиент.
    /// </summary>
    // *** Start programmer edit section *** (Клиент CustomAttributes)

    // *** End programmer edit section *** (Клиент CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлиентE", new string[] {
            "idКлиента as \'Id клиента\'",
            "НаимОрганицации as \'Наим органицации\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "НомерТелефона as \'Номер телефона\'"})]
    [View("КлиентL", new string[] {
            "idКлиента as \'Id клиента\'",
            "НаимОрганицации as \'Наим органицации\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "НомерТелефона as \'Номер телефона\'"})]
    public class Клиент : ICSSoft.STORMNET.DataObject
    {
        
        private int fidКлиента;
        
        private string fФамилия;
        
        private string fИмя;
        
        private string fОтчество;
        
        private string fНомерТелефона;
        
        private string fНаимОрганицации;
        
        // *** Start programmer edit section *** (Клиент CustomMembers)

        // *** End programmer edit section *** (Клиент CustomMembers)

        
        /// <summary>
        /// idКлиента.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.idКлиента CustomAttributes)

        // *** End programmer edit section *** (Клиент.idКлиента CustomAttributes)
        public virtual int idКлиента
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.idКлиента Get start)

                // *** End programmer edit section *** (Клиент.idКлиента Get start)
                int result = this.fidКлиента;
                // *** Start programmer edit section *** (Клиент.idКлиента Get end)

                // *** End programmer edit section *** (Клиент.idКлиента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.idКлиента Set start)

                // *** End programmer edit section *** (Клиент.idКлиента Set start)
                this.fidКлиента = value;
                // *** Start programmer edit section *** (Клиент.idКлиента Set end)

                // *** End programmer edit section *** (Клиент.idКлиента Set end)
            }
        }
        
        /// <summary>
        /// Имя.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Имя CustomAttributes)

        // *** End programmer edit section *** (Клиент.Имя CustomAttributes)
        [StrLen(255)]
        public virtual string Имя
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Имя Get start)

                // *** End programmer edit section *** (Клиент.Имя Get start)
                string result = this.fИмя;
                // *** Start programmer edit section *** (Клиент.Имя Get end)

                // *** End programmer edit section *** (Клиент.Имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Имя Set start)

                // *** End programmer edit section *** (Клиент.Имя Set start)
                this.fИмя = value;
                // *** Start programmer edit section *** (Клиент.Имя Set end)

                // *** End programmer edit section *** (Клиент.Имя Set end)
            }
        }
        
        /// <summary>
        /// НаимОрганицации.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.НаимОрганицации CustomAttributes)

        // *** End programmer edit section *** (Клиент.НаимОрганицации CustomAttributes)
        [StrLen(255)]
        public virtual string НаимОрганицации
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.НаимОрганицации Get start)

                // *** End programmer edit section *** (Клиент.НаимОрганицации Get start)
                string result = this.fНаимОрганицации;
                // *** Start programmer edit section *** (Клиент.НаимОрганицации Get end)

                // *** End programmer edit section *** (Клиент.НаимОрганицации Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.НаимОрганицации Set start)

                // *** End programmer edit section *** (Клиент.НаимОрганицации Set start)
                this.fНаимОрганицации = value;
                // *** Start programmer edit section *** (Клиент.НаимОрганицации Set end)

                // *** End programmer edit section *** (Клиент.НаимОрганицации Set end)
            }
        }
        
        /// <summary>
        /// НомерТелефона.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.НомерТелефона CustomAttributes)

        // *** End programmer edit section *** (Клиент.НомерТелефона CustomAttributes)
        [StrLen(255)]
        public virtual string НомерТелефона
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.НомерТелефона Get start)

                // *** End programmer edit section *** (Клиент.НомерТелефона Get start)
                string result = this.fНомерТелефона;
                // *** Start programmer edit section *** (Клиент.НомерТелефона Get end)

                // *** End programmer edit section *** (Клиент.НомерТелефона Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.НомерТелефона Set start)

                // *** End programmer edit section *** (Клиент.НомерТелефона Set start)
                this.fНомерТелефона = value;
                // *** Start programmer edit section *** (Клиент.НомерТелефона Set end)

                // *** End programmer edit section *** (Клиент.НомерТелефона Set end)
            }
        }
        
        /// <summary>
        /// Отчество.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Отчество CustomAttributes)

        // *** End programmer edit section *** (Клиент.Отчество CustomAttributes)
        [StrLen(255)]
        public virtual string Отчество
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Отчество Get start)

                // *** End programmer edit section *** (Клиент.Отчество Get start)
                string result = this.fОтчество;
                // *** Start programmer edit section *** (Клиент.Отчество Get end)

                // *** End programmer edit section *** (Клиент.Отчество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Отчество Set start)

                // *** End programmer edit section *** (Клиент.Отчество Set start)
                this.fОтчество = value;
                // *** Start programmer edit section *** (Клиент.Отчество Set end)

                // *** End programmer edit section *** (Клиент.Отчество Set end)
            }
        }
        
        /// <summary>
        /// Фамилия.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Фамилия CustomAttributes)

        // *** End programmer edit section *** (Клиент.Фамилия CustomAttributes)
        [StrLen(255)]
        public virtual string Фамилия
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Фамилия Get start)

                // *** End programmer edit section *** (Клиент.Фамилия Get start)
                string result = this.fФамилия;
                // *** Start programmer edit section *** (Клиент.Фамилия Get end)

                // *** End programmer edit section *** (Клиент.Фамилия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Фамилия Set start)

                // *** End programmer edit section *** (Клиент.Фамилия Set start)
                this.fФамилия = value;
                // *** Start programmer edit section *** (Клиент.Фамилия Set end)

                // *** End programmer edit section *** (Клиент.Фамилия Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлиентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентE", typeof(IIS.Kursovaya18.Клиент));
                }
            }
            
            /// <summary>
            /// "КлиентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентL", typeof(IIS.Kursovaya18.Клиент));
                }
            }
        }
    }
}
