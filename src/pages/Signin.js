import React from 'react';
import firebase from 'firebase/app';
import { Container, Grid, Row, Panel, Col, Button, Icon, Alert } from 'rsuite';
import { auth, database } from '../misc/firebase';
function Signin() {
  const signInWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }
      Alert.success('Signedin');
    } catch (err) {
      Alert.info(err.message, 4000);
    }
  };

  const signInWithFacebook = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };

  const signInWithGoogle = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to chat </h2>
                <p>Progressive chat app for neophytes</p>
              </div>
              <div className="mt-3">
                <Button block color="primary" onClick={signInWithFacebook}>
                  <Icon icon="facebook" /> Continue with Facebook
                </Button>
                <Button block color="green" onClick={signInWithGoogle}>
                  <Icon icon="google" /> Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}

export default Signin;
