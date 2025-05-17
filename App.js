import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

const INITIAL_PLAYER_HP = 100;
const INITIAL_ENEMY_HP = 100;
const AUTO_ATTACK_DAMAGE = 5;
const ENEMY_ATTACK_DAMAGE = 3;

export default function App() {
  const [playerHP, setPlayerHP] = useState(INITIAL_PLAYER_HP);
  const [enemyHP, setEnemyHP] = useState(INITIAL_ENEMY_HP);
  const [defeated, setDefeated] = useState(0);

  useEffect(() => {
    const playerInterval = setInterval(() => {
      attackEnemy(AUTO_ATTACK_DAMAGE);
    }, 1000);

    const enemyInterval = setInterval(() => {
      attackPlayer(ENEMY_ATTACK_DAMAGE);
    }, 1500);

    return () => {
      clearInterval(playerInterval);
      clearInterval(enemyInterval);
    };
  }, [playerHP, enemyHP]);

  const attackEnemy = (damage) => {
    setEnemyHP((hp) => {
      const newHP = hp - damage;
      if (newHP <= 0) {
        setDefeated((d) => d + 1);
        return INITIAL_ENEMY_HP + defeated * 20;
      }
      return newHP;
    });
  };

  const attackPlayer = (damage) => {
    setPlayerHP((hp) => {
      const newHP = hp - damage;
      if (newHP <= 0) {
        return INITIAL_PLAYER_HP;
      }
      return newHP;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Idle Battle</Text>
      <View style={styles.battleInfo}>
        <Text>Player HP: {playerHP}</Text>
        <Text>Enemy HP: {enemyHP}</Text>
        <Text>Enemies Defeated: {defeated}</Text>
      </View>
      <Button title="Attack" onPress={() => attackEnemy(10)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  battleInfo: {
    marginBottom: 24,
  },
});
