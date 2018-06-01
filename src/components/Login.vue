<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12 sm5 md5 lg5 offset-sm4 offset-md4 offset-lg4>
                <v-card>
                    <v-toolbar color="indigo" dark>
                        <v-toolbar-title>{{title}}</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form">
                            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                            <v-text-field v-model="password" :type="'password'" :rules="passwordRules" :counter="6" label="Password" required></v-text-field>
                            <v-checkbox v-model="rememberPassword" label="Remember password?" required></v-checkbox>
                            <v-checkbox v-model="forgotPassword" label="Forgot password?" required></v-checkbox>

                            <v-btn @click="login">Login</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>

    export default  {
        name: 'login',
        data: () => ({
            title: 'Login',
            valid: true,
            password: '123456',
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 6) || 'Password must be greated than 5 characters'
            ],
            email: 'test@gmail.com',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            rememberPassword: false,
            forgotPassword: false
        }),

        methods: {
            login () {
                if (this.$refs.form.validate()) {
                    // Native form submission is not yet supported
                    if(this.email == 'test@gmail.com' && this.password == '123456'){
                        alert('Done');
                        // this.$route.path = 'dashboard'
                        location.href = '/#/dashboard';
                        window.location.reload();
                    }
                }
            }
        }
    }
</script>