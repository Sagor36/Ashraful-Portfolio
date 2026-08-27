import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [itemsToShow, setItemsToShow] = useState(5);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  
  const categories = ['All', 'YouTube', 'Ads', 'Payment Proof'];
  
  const works = [    { title: 'YouTube Portfolio 1', category: 'YouTube', img: 'https://blogger.googleusercontent.com/img/a/AVvXsEg6FXCCAGfoS-fvtKWl5K7_Y1wSRE33-2hnGh72djQN4SiPNfXne-DHiE8q86xf4uYiGPpOMpcpEw4D2Bo6RDBXaKbo5RJEK_kBAb0hVd0SK8Yj_cbQMXX9PEu6PYYVT5lAICyYDrPDst4lbkXx1X4ypVBlNq4ik_CsOpiPTL2Xm9wtA2VVhoq3v0e4fQ' },
    { title: 'YouTube Portfolio 2', category: 'YouTube', img: 'https://blogger.googleusercontent.com/img/a/AVvXsEhR9WwraQ3h2HaGMMiGNbB5oRluoLlQgYBtB7r2Qky57AvQYl3Ur8ad1aaauZnfOOnxh-bzjyJVaQoiV51KaHbViKvKAU8E3VtsoGNrVD1a-6kU4OFi7GAErB4KvBN961QgE5QnlAEA24c2ROHU9yV3uNsOujD_NRogvlLHZj0Z6VeEDT6jacbndxCFlA' },
    { title: 'YouTube Portfolio 3', category: 'YouTube', img: 'https://blogger.googleusercontent.com/img/a/AVvXsEhG6arBIF78pTMjgCTTz7YdYMtfAR0JqKpxaTbqES4AIvdZunoZa7IkP1w4tBCyf5nFSQhsdwnArIbH5YYOYPZTwAM0w9g6dnxtSOt7Qd9kMKkEmMGAsRN3NnQUScdw49yQX3gKlY1-SzLwQMXsnkxlnQrE6dlZc_9doTTs9uVO64xvpjePjVnyeyrfHQ' },
    { title: 'YouTube Portfolio 4', category: 'YouTube', img: 'https://blogger.googleusercontent.com/img/a/AVvXsEiTwqvw9xmb9AH9U1jvEfjeLGfMa0idhNHggLCPA1Wg0GKRTPaADBvkgIIsaHj17-I7944p2fM9tUSpRHE11viISIR6_LrnSR72bPZv82Ek-I7gYgX7dVmHra9NaFh2Gt4gNY-1HWJYB-qNyz_V8LJVEtZEcBzynzfM1xLwMNIPG0GDyf3BFFUBNncbXQ=w374-h186' },
    { title: 'YouTube Portfolio 5', category: 'YouTube', img: 'https://blogger.googleusercontent.com/img/a/AVvXsEiL1WhYebeMxToCiidE008oYdJDHjsajwUHyJefQkYZRfO0_P52PqYeyNtoMfKiw9474Dit0nmaepFcdB-8dC-8HpYjECrG9_i_B7SLEIEti8OUIEUJWGKgyeoVX0F2UKWc0kaRaDjE_JgxbOVBKd5QtUmv2VKOHIG_yo94aEArN9ohm5DC2aEtbb64yg' },
    { title: 'Payment Proof 1', category: 'Payment Proof', img: 'https://blogger.googleusercontent.com/img/a/AVvXsEh2WZHmAVD6u0rbd8ZKxr_-x4qHydZcpGahTw1P3aKolQHlKiw_bFIdftXUHbNQwW98sZ4fYuuI2J9AFvsL7Ok3znV4kaoSxIOZxsWV1WqpDkUzyW3JWqR64RlY8UMCrRf09ucJPLX_z_Fhq5W9la7loU-iiIcE_lzmHdPEv9r6gw1jPIxKvDeHXUrBWw' },
    { title: 'Payment Proof 2', category: 'Payment Proof', img: 'https://blogger.googleusercontent.com/img/a/AVvXsEj707ZywlA-wm0SF_ukLlf1sor_dM64r1LGHC3i8hSxMUXj2dDinaHQR3HIvB9A-dYqlDlpuIdkb3meyxLLeAMePdh7CV1CJLHzKb4tKtI9lxcq1SVge361wlYEkpTbBMDukjg5JiI0dZAEtqKXKv0L818WvcEhxhIszHJ5-y-WVro2a4UuFPTsG-yf2Q' },
    { title: 'Payment Proof 3', category: 'Payment Proof', img: 'https://blogger.googleusercontent.com/img/a/AVvXsEguj7720pRwLlGw6_LIuYJD4bAK0QAY3fmDSyxZbmIGGorkJoffrm-BOJLTke0a5dY-KSMczLILYkqxHa5yQs1Ektnk7Htyp-KNZRZzoEIUfD_YGK9A8Ihuoji43RA4y3Z8nFkNRk7DvkQEBYzXoSSCt9YG2mfnUSredp_cHuksZ-u6T3-_12BkjZ6a-Q' },
    { title: 'Payment Proof 4', category: 'Payment Proof', img: 'https://blogger.googleusercontent.com/img/a/AVvXsEiI5kS3BuFJqNQibK-GrDuY76oBiC3ZNIFk6tl8_PtDFZUdhIhYfPPaQU73JaLpEUXW3Cp5VNXdoH2LKmo3E0qTiY0uCacym8YneBnqt9TH23f2G-EWsjaHmy4ktVJIvMrZ2L8JPEzBB2VwtYU4qizcmNsIG9Sz22cjpmi_117_QKShUWx0eVfXT72sSQ' },
    { title: 'Payment Proof 5', category: 'Payment Proof', img: 'https://blogger.googleusercontent.com/img/a/AVvXsEh30I0CCpTO0wwK_XcZdQvUKsa0xY-rImrwExowHfFFSyxztgphGDdEPVGQcZGbB9WmUPOAd9_l_eR3pkW0IMFiJAlr9HukVZWtwUSmtzeRGaxhgOlMOOMST-pZiR8O2VjHhgfiHrZ2B2Ya9irD5hWsMV_mRp7F89TTt2UaHMX0d4kSqxm4h8jczjY2CQ' },
    { title: 'Payment Proof 6', category: 'Payment Proof', img: 'https://blogger.googleusercontent.com/img/a/AVvXsEgoQ1A-mVDiq6-jjcMQZX-2bj9S8b5I9TdAmHqS-L4qcwy71FMWphRwKBYLe9Kv3W8rZArNNc7wP7XPybuHO04QxUQjQXLs8LIiS7vsbqWGSwbWFSdt4W1T251n0ba0q4vXmcrdDNh9FiFJbwECAarRjySxSxYCw1Mw5csQp0lVF8AnRV-aOVy5kiez1w' },
    { title: 'Google Ads Campaign', category: 'Ads', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXtBOxfj_u1cv3QshL7mcN7AZpdzElj8X93mjwE_PSwd5KakoJ-DbUuvu-EJH9BXd0f8yMbVxebfMWqvyJSMY03VhzZilZ0I3iAIZ8gtE8QmW-UvWLMnEFxuoLq-Gv0N-aymqYLD7PE1kIEqtxKl2lZnibaUw_77gHkLb1FpsDf0HVofGP1FplT8ow35E/s320/Screenshot_9.png' },
    { title: 'Channel views and engagement.', category: 'Ads', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwaMEkFO4cmLAHgL-Hpe-1HqdRs-ItHnuA3oSS_ibnWa-eP5xh32SmES0WotCMkwka6HV81T0ZNSci0xieMHjNU5AAn7z8idRO3Hu4cKyey5ZEIEbn7MqZtdXnyOwVnWtf_4nFFH4A0U0CDTtBBKSUlggwm2Qf-aP0wMlFggN1Hu35waxVOqsJSfM5RFI/s320/Screenshot_2.png' },
    { title: 'Google Ads Campaign', category: 'Ads', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMJPrs4zsjnn1NPsfculswbPM9gv3HR7B2cS-809QPNH5Ux2dnmInQ0kE7drVhsKTcHdv6Rgrg3WN3qhaPIcWe57vpMSzhCOmCYLngEtnJHyFtKbDTW4SDDXUdokuMyFaUNJLc69_tNP7-_U8weD5rQU71pHUc1Nmb_q6uxdyFxYgPZQAJNhZLyyy2O9s/s320/Screenshot_12.png' },
    { title: 'Google Ads Campaign', category: 'Ads', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjn82HBu_VchHmcIBAQWjY-vfrDbDcB_muJxPhP3qiVMXMkyL8vGa9RPQCkU3kj0sMku005ZlfM7ZGHqU4lFsZJNq72kc8P_nWou9dp3Q0aIzZfqg6vRF0xaPvoZvB2DE4-P3rRriwektViwTkaViwln-R6Yv1CkerMWEBMBXZTdgE5P7jzEYsToMdBoLA/s320/Screenshot_20.png' },
    { title: 'Google Ads Campaign', category: 'Ads', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghrt4Ftl0seHhJ5s4Q-5s0R6KyvgTLPSwsqavw682TpkYCg4wTWOXqd8x0KLF3aQMhtP7NAN_YODW_RYueVVcRPMLxyWJAPv0WlmMs-L5KlFI7Cm1tRKl96P3UMrZxwkYmSE47iXh0JNUJXSPe8c5RTL5ajyZxqun9LseumUWHflU7VTwLKNENpg9nGG4/s320/Screenshot_13.png' },
  ];

  const filteredWorks = filter === 'All' ? works : works.filter(w => w.category === filter);

  return (
    /* py-20 muche pt-0 kora hoyeche jate uporer gap chole jay */
    <div className="max-w-7xl mx-auto px-6 pt-0 pb-20 bg-transparent min-h-screen text-white font-sans">
      
      {/* mb-16 ke mb-8 kora hoyeche jate Title er upore-niche faka kome */}
      <div className="text-center mb-10 pt-4">
        <h2 className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Portfolio</h2>
        <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">My Recent Works</h3>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => { setFilter(cat); setItemsToShow(5); }}
            className={`px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' : 'bg-[#111] text-gray-400 border border-white/5 hover:border-cyan-500'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Smart Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        {filteredWorks.slice(0, itemsToShow).map((work, idx) => (
          <div 
            key={idx} 
            className={`group flex flex-col bg-[#0d0d0d] rounded-[2rem] p-4 border border-white/10 hover:border-cyan-500/40 transition-all duration-500 ${idx < 2 ? 'md:col-span-3' : 'md:col-span-2'}`}
          >
            {/* Image Box */}
            <div 
              onClick={() => setSelectedImg(work.img)}
              className="relative h-[320px] md:h-[360px] w-full rounded-2xl overflow-hidden bg-slate-950 cursor-pointer flex items-center justify-center p-2"
            >
              <img 
                src={work.img} 
                alt={work.title} 
                className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                 <div className="bg-cyan-500 text-black p-3 rounded-full">
                    <span className="text-xl font-bold">🔍</span>
                 </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6 px-1">
              <span className="text-[10px] text-cyan-500 font-black uppercase tracking-widest">{work.category}</span>
              <h4 className="text-lg font-bold text-white mt-1 group-hover:text-cyan-500 transition-colors line-clamp-1">{work.title}</h4>
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-60">
                 <button className="text-[10px] font-bold uppercase tracking-widest">View Full Case</button>
                 <span className="text-cyan-500">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {itemsToShow < filteredWorks.length && (
        <div className="text-center mt-12">
          <button 
            onClick={() => setItemsToShow(works.length)}
            className="px-12 py-4 bg-cyan-500 rounded-2xl font-black text-[11px] uppercase tracking-widest text-black hover:scale-105 transition-all shadow-2xl shadow-cyan-500/20"
          >
            Explore More Results ↗
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-[999] bg-slate-950/98 flex items-center justify-center p-4 backdrop-blur-md" onClick={() => setSelectedImg(null)}>
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <img src={selectedImg} alt="Preview" className="max-w-full max-h-[90vh] rounded-xl shadow-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
