<template>
    <div class="signup">
        <h1>This is Signup Page</h1>
        <div class="card-container">
            <form action="/auth/signup" method="POST">
                <div>
                    <label for="email">メール</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                    >
                </div>
                <div>
                    <label for="password">パスワード</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                    >
                </div>
                <div class="form-control">
                <label for="confirmPassword">パスワードをもう一度入力</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                >
            </div>
                <button class="btn" type="submit">登録</button>
            </form>
        </div>
    </div>
</template>

