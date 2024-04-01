import React, { useEffect, useRef, useState } from "react";

const AgencySignUp = () => {

    const [city, setCity] = useState('');
    const [packageType, setPackageType] = useState('');
    const [packageDuration, setPackageDuration] = useState('');
    const [referenceCode, setReferenceCode] = useState('');
    const [domain, setDomain] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [confirmAdminPassword, setConfirmAdminPassword] = useState('');
    const [adminEmail, setAdminEmail] = useState('');
    const [agreements, setAgreements] = useState({
        salesContract: false,
        privacyPolicy: false,
        kvkk: false // KVKK is the Turkish Personal Data Protection Law
    });

    const handleAgreementChange = (e) => {
        setAgreements({ ...agreements, [e.target.name]: e.target.checked });
    };

    
    return (
        <div className="container mx-auto pt-10 font-montserrat sm:w-full md:w-3/4 lg:w-1/2">
            <form className="w-full max-w-l mx-auto ">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-name">
                            Marka / Şirket Kısa Adı
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="company-name" type="text" placeholder="Turizm Şirketim" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full  px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="authorized-signatory-name">
                            Şirket İmza Yetkilisi Adı Soyadı
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="authorized-signatory-name" type="text" placeholder="Adı" />
                    </div>

                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-email">
                            Şirket E-Posta Adresi
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="company-email" type="email" placeholder="email@example.com" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-phone">
                            Şirket Telefonu
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="company-phone" type="text" placeholder="(555) 555-5555" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="authorized-mobile">
                            Yetkili Cep Telefonu
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="authorized-mobile" type="text" placeholder="(555) 555-5555" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="company-title">
                            Şirket Ünvanı
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="company-title" type="text" placeholder="Şirket Adı Tur. San. A.Ş" />
                        <p className="text-gray-600 text-xs italic">Bu bilgileri lütfen eksiksiz yazınız, doğrulanamayan kayıtlar onaylanamamaktadır.</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
                            İl
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" value={city} onChange={(e) => setCity(e.target.value)}>
                                <option>İl Seçiniz</option>
                                {/* İller burada listelenecek */}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M5.8 12.6L10 16.8l4.2-4.2h-8.4z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="district">
                            İlçe
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="district" type="text" placeholder="İlçe" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tax-number">
                            Vergi No
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="tax-number" type="text" placeholder="Vergi No" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tax-office">
                            Vergi Dairesi
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="tax-office" type="text" placeholder="Vergi Dairesi" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="invoice-address">
                            Fatura Adresi
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="invoice-address" rows="3" placeholder="Fatura Adresi"></textarea>
                    </div>
                </div>
                <div className="container mx-auto p-6 font-montserrat">
                    <form className="w-full max-w-3xl mx-auto">
                        {/* Domain Name */}
                        <div className="flex flex-wrap mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="domain-name">
                                    Alan Adı:
                                </label>
                                <div className="flex">
                                    <span className="flex items-center bg-grey-lighter rounded-l px-3 font-bold text-grey-darker">www.</span>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-l-0 border-gray-200 rounded-r py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="domain-name"
                                        type="text"
                                        value={domain}
                                        onChange={(e) => setDomain(e.target.value)}
                                        placeholder="alanadiniz.com.tr"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin-email">
                                    Yönetici E-Posta Adresi:
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="admin-email"
                                    type="email"
                                    value={adminEmail}
                                    onChange={(e) => setAdminEmail(e.target.value)}
                                    placeholder="Yönetici E-Posta Adresi"
                                />
                            </div>
                        </div>

                        {/* Passwords */}
                        <div className="flex flex-wrap mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin-password">
                                    Bir Yönetici Şifresi Belirleyin:
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="admin-password"
                                    type="password"
                                    value={adminPassword}
                                    onChange={(e) => setAdminPassword(e.target.value)}
                                    placeholder="Yönetici Şifresi"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin-password-confirm">
                                    Yönetici Şifresi (Tekrar Giriniz):
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="admin-password-confirm"
                                    type="password"
                                    value={confirmAdminPassword}
                                    onChange={(e) => setConfirmAdminPassword(e.target.value)}
                                    placeholder="Yönetici Şifresi (Tekrar)"
                                />
                            </div>
                        </div>

                    </form>
                </div>

                <div className="container mx-auto p-6 font-montserrat">
                    <form className="w-full max-w-3xl mx-auto">
                        {/* Package selection */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="package-selection">
                                Paket Seçimi
                            </label>
                            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                id="package-selection"
                                value={packageType}
                                onChange={(e) => setPackageType(e.target.value)}
                            >
                                <option>Kurumsal</option>
                                {/* Other options */}
                            </select>
                        </div>

                        {/* Package duration */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="package-duration">
                                Paket Süresi
                            </label>
                            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                id="package-duration"
                                value={packageDuration}
                                onChange={(e) => setPackageDuration(e.target.value)}
                            >
                                <option>Seçiniz</option>
                                {/* Duration options */}
                            </select>
                        </div>

                        {/* Reference code */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reference-code">
                                Referans Kodu:
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="reference-code"
                                type="text"
                                value={referenceCode}
                                onChange={(e) => setReferenceCode(e.target.value)}
                                placeholder="Referans Kodu"
                            />
                        </div>

                        {/* Agreements */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Sözleşmeler
                            </label>
                            <div className="mb-2">
                                <input type="checkbox" name="salesContract" checked={agreements.salesContract} onChange={handleAgreementChange} />
                                <label className="text-gray-700 text-sm"> Mesafeli satış sözleşmesini kabul ediyorum</label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" name="privacyPolicy" checked={agreements.privacyPolicy} onChange={handleAgreementChange} />
                                <label className="text-gray-700 text-sm"> Gizlilik sözleşmesini kabul ediyorum</label>
                            </div>
                            <div className="mb-2">
                                <input type="checkbox" name="kvkk" checked={agreements.kvkk} onChange={handleAgreementChange} />
                                <label className="text-gray-700 text-sm"> KVKK bildirimini kabul ediyorum</label>
                            </div>
                        </div>


                        {/* Submit button */}
                        <div className="flex items-center justify-between">
                            <button className=" mx-auto bg-red-500 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Kaydet
                            </button>
                        </div>
                    </form>
                </div>

            </form>
        </div>

    );


};
export default AgencySignUp;

