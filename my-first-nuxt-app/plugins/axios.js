export default function ({ $axios }) {
  $axios.onRequest((config) => {
    if (process.env.QIITA_TOKEN) {
      // 実際の開発の場合は store.state.token などを参照することになるはずです
      // Bearer はOAuth に限らず、トークンを利用して認証・認可する機構の一部として Authorization: Bearer ヘッダを使うことができる
      config.headers.common['Authorization'] = `Bearer ${process.env.QIITA_TOKEN}`
    }
    return config
  })
}