import unittest
import helga_work

class FirstTest(unittest.TestCase):

    def test_anagramm(self):
        self.assertTrue(helga_work.anagramm("hullala","lalahul"))

    def test_anagramm_capitalletter(self):
        self.assertTrue(helga_work.anagramm("Hullala","lalahul"))

    def test_anagramm_space(self):
        self.assertTrue(helga_work.anagramm("h ullala","lalahul"))

    def test_anagramm_empty(self):
        self.assertFalse(helga_work.anagramm("","lalahul"))

    def test_count_letters(self):
        self.assertEqual(helga_work.count_letters("babbala"), {'b': 3, 'a': 3, 'l': 1})

    def test_count_letters_space(self):
        self.assertEqual(helga_work.count_letters("bab bala"), {'b': 3, 'a': 3, 'l': 1})

    def test_count_letters_capitalleter(self):
        self.assertEqual(helga_work.count_letters("babBala"), {'b': 3, 'a': 3, 'l': 1})

    def test_count_letters_empty(self):
        self.assertEqual(helga_work.count_letters(""), {})

if __name__ == '__main__':
    unittest.main()
