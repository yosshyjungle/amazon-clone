'use client';

import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    'Amazonについて': [
      { text: '採用情報', href: '#' },
      { text: 'About Amazon', href: '#' },
      { text: 'Newsroom', href: '#' },
      { text: '環境への取り組み', href: '#' },
      { text: '社会貢献・地域支援', href: '#' },
      { text: 'Amazon Science', href: '#' },
    ],
    'Amazonでビジネス': [
      { text: 'Amazonで売る', href: '#' },
      { text: 'Amazonへの出品', href: '#' },
      { text: 'フルフィルメント by Amazon', href: '#' },
      { text: 'Amazonビジネスで法人販売', href: '#' },
      { text: 'Amazon Pay（決済サービス）', href: '#' },
      { text: 'アソシエイト（アフィリエイト）', href: '#' },
      { text: 'Amazonで広告掲載をする', href: '#' },
      { text: 'Amazonで出版', href: '#' },
    ],
    'Amazonでのお支払い': [
      { text: 'Amazonポイント', href: '#' },
      { text: 'Amazonギフトカード', href: '#' },
      { text: 'Amazon Mastercard', href: '#' },
      { text: 'パートナーポイントプログラム', href: '#' },
      { text: 'Amazonギフトカードチャージタイプ', href: '#' },
      { text: '› すべての支払い方法を見る', href: '#' },
    ],
    'ヘルプ＆ガイド': [
      { text: '新型コロナウイルス関連', href: '#' },
      { text: '配送料と配送情報', href: '#' },
      { text: 'Amazon プライム', href: '#' },
      { text: '商品の返品・交換', href: '#' },
      { text: '返品先を探す', href: '#' },
      { text: 'コンテンツと端末の管理', href: '#' },
      { text: '保権について', href: '#' },
      { text: 'お客様サポート', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#232F3E] text-white mt-8">
      {/* トップへ戻るボタン */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-[#37475A] hover:bg-[#485769] py-4 text-center"
      >
        トップへ戻る
      </button>

      {/* メインフッターコンテンツ */}
      <div className="max-w-[1000px] mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h2 className="font-bold mb-4">{category}</h2>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.text}>
                    <Link 
                      href={link.href}
                      className="text-sm text-gray-300 hover:underline"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ボトムフッター */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1000px] mx-auto py-8 px-4">
          <div className="flex items-center justify-center mb-4">
            <img
              src="/amazon-logo-white.png"
              alt="Amazon Logo"
              className="h-6 object-contain"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-300">
            <Link href="#" className="hover:underline">利用規約</Link>
            <Link href="#" className="hover:underline">プライバシー規約</Link>
            <Link href="#" className="hover:underline">パーソナライズド広告規約</Link>
            <Link href="#" className="hover:underline">特定商取引法に基づく表示</Link>
          </div>
          <div className="text-xs text-gray-300 text-center mt-4">
            © 1996-2024, Amazon.com, Inc. またはその関連会社
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 