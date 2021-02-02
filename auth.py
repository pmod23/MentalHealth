# "2019 OSMI MENTAL HEALTH IN TECH SURVEY RESULTS",
#         "350 responses",
#         "26 questions"


#     "https://osmi.typeform.com/report/E1aoi6/8lZTgmG67MsOG7aH"




#     What is your well-being score?

# Take the self assessment


# Well being self-assessment



from functools import wraps
import datetime
from flask import Flask, jsonify, request, make_response
import jwt
JSON Web Tokens(JWT) in Python

pip install pyjwt
Traceback(most recent call last):
    File "<stdin>", line 1, in <module >
ModuleNotFoundError: No module named 'jwt'
>> > import jwt
>> > jwt.encode({'pretty': 'printed'}, 'donttellanyone')
b'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwcmV0dHkiOiJwcmludGVkIn0.4DHsKbSgMFS3N5C78Ucnt_9Oe5eMMOAmDoPtZoppep0'


mytoken = jwt.encode({'pretty': 'printed'}, 'donttellanyone') >> > jwt.decode(mytoken, 'donttellanyone')
{'pretty': 'printed'}

AUTHENTICATING A FLASK API USING JSON WEB TOKENS


app = Flask(__name__)

app.config['SECRET_KEY'] = 'thisisthesecretkey'


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.args.get('token')

        if not token:
            return jsonify({'message': 'Token is missing!'}), 403

        try:
            data.jwt.decode(token, app.config['SECRET_KEY'])
        except:
            return jsonify({'message': 'Token is invalid'}), 403

        return f(*args, **kwargs)

    return decorated


@app.route('/unprotected')
def unprotected():
    return jsonify({'message': 'Anyone can view this!'})


@app.route('/protected')
@token_required
def protected():
    return jsonify({'message': 'This is only availabe for people with valid tokens!'})


@app.route('/login')
def login():
    auth = request.authorization
    if auth and auth.password == 'password':
        token = jwt.encode({'user': auth.username, 'exp': datetime.datetime.utcnow(
        ) + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
        return jsonify({'token': token.decode('UTF-8')})

    return make_response('Could verify!', 401, {'WWW-Authenticate': 'Basic realm="Login Required'})


if __name__ == '_main_':
    app.run(debug=True)
