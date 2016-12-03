import unittest
import extend

class TestExtend(unittest.TestCase):
    def setUp(self):
        pass

    def test_add_2_and_3_is_5(self):
        self.assertEqual(extend.add(5, 6), 11)

    def test_add_4_and_1_is_5(self):
        self.assertEqual(extend.add(4, 4), 8)

    def test_max_of_three_first(self):
        self.assertEqual(extend.max_of_three(5, 6, 3), 6)

    def test_max_of_three_third(self):
        self.assertEqual(extend.max_of_three(3, 7, 5), 7)

    def test_median_four(self):
        self.assertEqual(extend.median([9,6,1,2]), 4)

    def test_median_five(self):
        self.assertEqual(extend.median([9,8,1,5,2]), 5)

    def test_median_five(self):
        self.assertEqual(extend.median([5, 5, 5, 5]), 5)

    def test_is_vovel_a(self):
        self.assertFalse(extend.is_vovel('!'))

    def test_is_vovel_u(self):
        self.assertTrue(extend.is_vovel('u'))

    def test_is_vovel_double(self):
        self.assertRaises(ValueError, extend.is_vovel, 'oa')

    def test_is_vovel_double(self):
        self.assertRaises(TypeError, extend.is_vovel, 2)

    def test_translate_bemutatkozik(self):
        self.assertEqual(extend.translate('bemutatkozik'), 'bevemuvutavatkovozivik')

    def test_translate_kolbice(self):
        self.assertEqual(extend.translate('kolbice'), 'kovolbiviceve')

if __name__ == '__main__':
    unittest.main()
