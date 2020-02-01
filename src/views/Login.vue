<template>
    <div class="login">
        <h1>This is Login Page</h1>
        <div class="card-container">
            <form action="/login" method="POST">
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
                <button class="btn" type="submit">Login</button>
            </form>
        </div>
    </div>
</template>