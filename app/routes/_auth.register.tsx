import { Box, Button, TextField } from "@mui/material";
import { LoadingButton } from"@mui/lab"
import { Link } from "@remix-run/react";

export default function Register() {
	return (
		<Box component="form" className="space-y-3">
			<TextField fullWidth id="username" label="お名前" name="username" required />
			<TextField fullWidth id="password" label="パスワード" name="password" type="password" required />
			<TextField fullWidth id="confirmPassword" label="確認用パスワード" name="confirmPassword" type="password" required />
       <LoadingButton className="justify-between w-full" type="submit" loading={false} color="primary" variant="outlined">
        アカウント作成
      </LoadingButton>
      <div className="flex items-center">
        <p className="ml-10 ">既にアカウントを持っていますか？</p>
        <Button>
          <Link to="/login">
            ログイン
          </Link>
        </Button>
      </div>
		</Box>
	);
}
